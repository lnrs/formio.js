var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GetDateComponentTransformer } from './GetDateComponent';
var GetQuarterTransformer = /** @class */ (function (_super) {
    __extends(GetQuarterTransformer, _super);
    function GetQuarterTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetQuarterTransformer, "title", {
        get: function () {
            return 'Get Quarter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetQuarterTransformer, "name", {
        get: function () {
            return 'getQuarter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetQuarterTransformer, "presetArguments", {
        get: function () {
            return {
                unit: {
                    valueSource: 'string',
                    stringInput: 'quarter',
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return GetQuarterTransformer;
}(GetDateComponentTransformer));
export { GetQuarterTransformer };