/**
 * MIT License
 * https://github.com/omgovich/react-colorful/
 *
 * Copyright (c) 2020 Vlad Shilov <omgovich@ya.ru>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { classes } from '@common/react';

export type PointerProps = {
  className?: string;
  top?: number;
  left: number;
  color: string;
};

export function Pointer(props: PointerProps) {
  const { className, color, left, top = 0.5 } = props;

  return (
    <div
      className={classes(['react-colorful__pointer', className])}
      style={{
        top: `${top * 100}%`,
        left: `${left * 100}%`,
      }}
    >
      <div
        className="react-colorful__pointer-fill"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
