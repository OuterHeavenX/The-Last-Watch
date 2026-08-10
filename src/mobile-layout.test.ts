import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('mobile Night layout regression', () => {
  const css=readFileSync(new URL('./style.css',import.meta.url),'utf8');
  const main=readFileSync(new URL('./main.ts',import.meta.url),'utf8');

  it('enters a dedicated full-viewport battle mode',()=>{
    expect(main).toContain("game-shell ${active?'':'battle-mode'}");
    expect(css).toContain('.battle-mode>header,.battle-mode>nav,.battle-mode>footer{display:none}');
    expect(css).toContain('height:100svh');
  });

  it('uses a wrapping touch control grid and hides overlapping labels',()=>{
    expect(css).toContain('.night-controls{grid-template-columns:repeat(3,1fr);overflow:visible}');
    expect(css).toContain('.battle-sprite span{display:none}');
    expect(css).toContain('min-height:52px');
  });
});
