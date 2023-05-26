import { Parser } from 'acorn';
import { tsPlugin } from 'acorn-typescript';
import { strip_types } from './strip_types.js';

const ParserWithTS = Parser.extend(tsPlugin());

/**
 * @param {string} source
 */
export const parse = (source) =>
	strip_types(
		ParserWithTS.parse(source, {
			sourceType: 'module',
			ecmaVersion: 'latest',
			locations: true
		})
	);

/**
 * @param {string} source
 * @param {number} index
 */
export const parse_expression_at = (source, index) =>
	strip_types(
		ParserWithTS.parseExpressionAt(source, index, {
			sourceType: 'module',
			ecmaVersion: 'latest',
			locations: true
		})
	);
