"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var arrow_right_icon_png_1 = require("../../assets/ICONS/arrow_right_icon.png");
var ModuleHeader_1 = require("../../components/ModuleHeader");
var rest_1 = require("../../utility/rest");
var angeboteTest = [
    {
        start: 'Köln',
        destination: 'Bochum',
        date: new Date(),
        car: 'VW Sprinter',
        name: 'Paul K.'
    },
    {
        start: 'Berlin',
        destination: 'Hamburg',
        date: new Date(),
        car: 'Mercedes Vito',
        name: 'Lara S.'
    },
    {
        start: 'München',
        destination: 'Frankfurt',
        date: new Date(),
        car: 'BMW i3',
        name: 'Otto G.'
    },
    {
        start: 'Dresden',
        destination: 'Leipzig',
        date: new Date(),
        car: 'Tesla Model 3',
        name: 'Marie L.'
    },
    {
        start: 'Hannover',
        destination: 'Bremen',
        date: new Date(),
        car: 'Opel Corsa',
        name: 'Peter M.'
    },
];
var Angebote = function () {
    var _a = react_1.useState([]), angebote = _a[0], setAngebote = _a[1];
    react_1.useEffect(function () {
        var fetchOffers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, rest_1["default"].get('offers')];
                    case 1:
                        response = _a.sent();
                        setAngebote(response.data);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('An error occurred while fetching offers:', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchOffers();
    }, []);
    return (react_1["default"].createElement(material_1.Box, { sx: {
            border: '1.5px solid black',
            borderRadius: '1px',
            backgroundColor: 'white'
        } },
        react_1["default"].createElement(ModuleHeader_1["default"], { header: 'Angebote' }),
        react_1["default"].createElement(material_1.Box, { sx: {
                p: '3vh'
            } },
            react_1["default"].createElement("form", { noValidate: true, autoComplete: 'off' },
                react_1["default"].createElement(material_1.Grid, { container: true, spacing: 3, alignItems: 'center' },
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 10, sm: 2 },
                        react_1["default"].createElement(material_1.FormControl, { fullWidth: true },
                            react_1["default"].createElement(material_1.TextField, { id: 'startort', label: 'Startort', variant: 'outlined' }))),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 2, sm: 1 },
                        react_1["default"].createElement("img", { src: arrow_right_icon_png_1["default"], alt: 'Arrow Icon', style: {
                                maxWidth: '50px',
                                height: 'auto'
                            } })),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 10, sm: 2 },
                        react_1["default"].createElement(material_1.FormControl, { fullWidth: true },
                            react_1["default"].createElement(material_1.TextField, { id: 'zielort', label: 'Zielort', variant: 'outlined' }))),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 3 },
                        react_1["default"].createElement(material_1.FormControl, { fullWidth: true },
                            react_1["default"].createElement(material_1.TextField, { id: 'datum', label: 'Datum', type: 'date', InputLabelProps: { shrink: true }, variant: 'outlined' }))),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 3 },
                        react_1["default"].createElement(material_1.Button, { variant: 'contained', color: 'primary', type: 'submit', sx: { mt: 2 } }, "Suche")))),
            angebote.map(function (angebot, index) {
                var _a, _b;
                return (react_1["default"].createElement(material_1.Grid, { container: true, key: index, sx: { mb: '2vh', mt: '3vh' } },
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                        react_1["default"].createElement(material_1.Box, { sx: {
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(material_1.Box, { sx: {
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '80%',
                                    alignItems: 'center'
                                } },
                                react_1["default"].createElement(material_1.Typography, null, angebot.startlocation),
                                react_1["default"].createElement(material_1.Box, null,
                                    react_1["default"].createElement("img", { src: arrow_right_icon_png_1["default"], alt: 'Arrow Icon', style: {
                                            maxWidth: '50px',
                                            height: 'auto'
                                        } })),
                                react_1["default"].createElement(material_1.Typography, null, angebot.endlocation)),
                            react_1["default"].createElement(material_1.Box, { sx: {
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    textAlign: 'flex-start'
                                } },
                                react_1["default"].createElement(material_1.Typography, null, (_b = (_a = angebot.date) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()) !== null && _b !== void 0 ? _b : 'Date not available')))),
                    react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
                        react_1["default"].createElement(material_1.Box, { sx: {
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(material_1.Box, null,
                                react_1["default"].createElement(material_1.Typography, null, angebot.animals)),
                            react_1["default"].createElement(material_1.Box, null,
                                react_1["default"].createElement(material_1.Typography, null, angebot.id)))),
                    index !== angebote.length - 1 && (react_1["default"].createElement(material_1.Divider, { sx: { width: '100%' } }))));
            }))));
};
exports["default"] = Angebote;
