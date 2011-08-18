/**
 * @license
 * YUI Tests to Jasmine converter [https://github.com/millermedeiros/YUI_to_Jasmine]
 * Author: Miller Medeiros
 * License: WTFPL
 */
var YUI_to_Jasmine = {

    VERSION : '0.1.1',

    ASSERTIONS : [
        {
            name : 'areSame',
            pattern : /Y.Assert.areSame\(\s*([^,]+)\s*,\s*([^,;]+).*\);/g, 
            replacement : 'expect( $2 ).toBe( $1 );'
        },
        {
            name : 'areEqual',
            pattern : /Y.Assert.areEqual\(\s*([^,]+)\s*,\s*([^,;]+).*\);/g, 
            replacement: 'expect( $2 ).toEqual( $1 );'
        },
        {
            name : 'isTrue',
            pattern : /Y.Assert.isTrue\(\s*([^,;]+).*\);/g, 
            replacement : 'expect( $1 ).toEqual( true );'
        },
        {
            name : 'isUndefined',
            pattern : /Y.Assert.isUndefined\(\s*([^,;]+).*\);/g, 
            replacement : 'expect( $1 ).toBeUndefined();'
        },
        {
            name : 'isDefined',
            pattern : /Y.Assert.isDefined\(\s*([^,;]+).*\);/g, 
            replacement : 'expect( $1 ).toBeDefined();'
        },
        {
            name : 'fail',
            pattern : /Y.Assert.fail\(\s*['"]?(.*)['"]?\s*\);/g,
            replacement : 'expect(null).toEqual(\'fail: $1\');'
        }
    ],

    convert : function(input){
        var n = this.ASSERTIONS.length,
            cur,
            out = input;
        while(cur = this.ASSERTIONS[--n]){
            out = out.replace(cur.pattern, cur.replacement);
        }
        return out;
    }

};
