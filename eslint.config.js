import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['node_modules/', 'dist/', 'build/', '.next/'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [js.configs.recommended, tseslint.configs.recommended],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            semi: 'error',
            'prefer-const': 'error',
        },
    },
    {
        files: ['**/*.tsx'],
        extends: [pluginReact.configs.flat.recommended],
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.tsx'],
        plugins: {
            'react-hooks': pluginReactHooks,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
        },
    },
]);
