import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { BundledTheme, Highlighter, HighlighterGeneric } from 'shiki';
import { getHighlighter } from 'shiki';
import useControlledState from 'use-merge-value';

import { languageMap } from './language';

export interface ShikiSyntaxTheme {
  dark: BundledTheme;
  light: BundledTheme;
}

export interface ShikiOptions {
  onInit?: (instance: Highlighter) => void;
  onLoadingChange?: (loading: boolean) => void;
  theme?: Partial<ShikiSyntaxTheme>;
}

const defaultTheme: ShikiSyntaxTheme = {
  dark: 'github-dark',
  light: 'github-light',
};

export const useShiki = ({ onLoadingChange, theme }: ShikiOptions) => {
  const mergeTheme = useMemo(() => ({ ...defaultTheme, ...theme }), [theme]);
  const [THEME] = useControlledState(defaultTheme, { value: mergeTheme });

  const shikiRef = useRef<HighlighterGeneric<any, any> | null>(null);

  const initHighlighter = async (theme: ShikiSyntaxTheme) => {
    onLoadingChange?.(true);

    shikiRef.current = await getHighlighter({
      langs: Object.keys(languageMap) as any,
      themes: Object.values(theme),
    });

    onLoadingChange?.(false);
  };

  // 初始化 Shiki HightLighter
  useEffect(() => {
    initHighlighter(THEME);
  }, [THEME]);

  return useCallback(
    (text: string, language: any, isDarkMode: boolean) => {
      try {
        return (
          shikiRef.current?.codeToHtml(text, {
            lang: language,
            theme: isDarkMode ? THEME.dark : THEME.light,
          }) || ''
        );
      } catch (e) {
        onLoadingChange?.(true);
        initHighlighter(THEME);
      }
    },
    [THEME],
  );
};
