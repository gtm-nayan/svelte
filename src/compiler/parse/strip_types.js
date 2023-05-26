import { walk } from 'estree-walker';

export function strip_types(ast) {
	return walk(ast, {
		enter(node, _parent, prop, _index) {
			if (prop === 'typeAnnotation' || prop === 'typeParameters') {
				this.remove();
			} else if (node.type.startsWith('TS')) {
				const ts_node = /** @type {any} */ (node);

				switch (ts_node.type) {
					case 'TSAsExpression':
					case 'TSNonNullExpression':
						// hack to make sure parser skips over the type assertion
						ts_node.expression.end = ts_node.end;
						this.replace(ts_node.expression);
                        node = ts_node.expression;
						break;
					default:
						this.remove();
						break;
				}
			// @ts-expect-error
			} else if (node.exportKind === 'type' || node.importKind === 'type') {
				this.remove();
			}

            // temp hack for parser tests
            delete node.loc.start.index;
            delete node.loc.end.index;
            delete node.returnType;
            delete node.importKind;
            delete node.exportKind;
		}
	});
}
