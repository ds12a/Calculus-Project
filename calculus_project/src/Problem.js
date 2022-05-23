import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function generateProblem(a, b, c, d, i, j, k, round) {
    if (round == 1) {
        return [((d % 2 == 1) ? "\\int(" : "d/dx(")+ a + "x^" + i + " + "  + b + "x^" + j + " + "  + c + "x^" + k + " + " + ((d % 2 == 1) ? ")dx" : ")"), ]
    }
    else {

    }
}