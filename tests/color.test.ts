import assert from 'node:assert';
import { describe, it } from 'node:test';
import { Color } from '../lib/common/color.ts';

describe('Color Conversion', () => {
    it('Color Conversion: Convert a hex color to a Color object and back', () => {
        const hex = '#ff5733';
        const color = Color.fromHex(hex);
        assert.strictEqual(color.r, 255);
        assert.strictEqual(color.g, 87);
        assert.strictEqual(color.b, 51);
        assert.strictEqual(color.a, 1);

        const rgbaString = color.toString();
        assert.strictEqual(rgbaString, 'rgba(255, 87, 51, 1)');
    });

    it('Color Conversion: Convert a hex color with alpha channel to a Color object and back', () => {
        const hex = '#ff573380';
        const color = Color.fromHex(hex);
        assert.strictEqual(color.r, 255);
        assert.strictEqual(color.g, 87);
        assert.strictEqual(color.b, 51);
        assert(Math.abs(color.a - 0.5) < 0.01);

        const rgbaString = color.toString();
        assert.strictEqual(rgbaString, 'rgba(255, 87, 51, 0.5)');
    });

    it('Color Conversion: Throw an error for invalid hex color formats', () => {
        assert.throws(() => Color.fromHex('#123'), /Invalid hex color format\. Expected #RRGGBB or #RRGGBBAA\./);
        assert.throws(() => Color.fromHex('#12345'), /Invalid hex color format\. Expected #RRGGBB or #RRGGBBAA\./);
    });
});
