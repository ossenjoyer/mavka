await (async function(){
var module_читати_504630307;
var init_module_читати_504630307=async function(){
if(module_читати_504630307){ return; }
var module = await мМодл("читати",async function(module){
var м____шлях_до_модуля___="/home/kohutd/PhpstormProjects/mavka/mavka/вп/читати.м";
  var м_чародія_викликати,м_читати;
  /* --- js --- */

const { default: rl } = await import('readline');
const rlInterface = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(rlInterface);

var м_читати = мДія("читати", [мПарм("питання", [м_текст], "")], function(args) {
  const ask = args[0] ?? args["питання"];
  return global.mavka_read({ sigint: true })(ask);
});

/* --- /js --- */;
  м_чародія_викликати=мДія("чародія_викликати",[],function(args){
    мВикл(м_друк,{0:"лол"});
  });
  мДати(module,"чародія_викликати",м_чародія_викликати);

});
module_читати_504630307=module;

}
var м_ні,м_число,м_так,м_Дія,м_логічне,м_Модуль,м_текст,м_пусто;
/* --- js --- */
var MAVKA=Symbol("мавка");var м_пусто=null;var м_логічне=Boolean;м_логічне["чародія_викликати"]=мДія("чародія_викликати",[мПарм("значення")],function(args){var value=args[0]??args["значення"];if(value["чародія_перетворити_на_логічне"]){return мВикл(value["чародія_перетворити_на_логічне"],[value])}return Boolean(value)});м_логічне["чародія_перетворити_на_текст"]=мДія("чародія_перетворити_на_текст",[],function(){return"<структура логічне>"});var м_так=true;var м_ні=false;var м_число=Number;м_число["чародія_викликати"]=мДія("чародія_викликати",[мПарм("значення")],function(args){var value=args[0]??args["значення"];if(value["чародія_перетворити_на_число"]){return мВикл(value["чародія_перетворити_на_число"],[value])}return Number(value)});м_число["чародія_перетворити_на_текст"]=мДія("чародія_перетворити_на_текст",[],function(){return"<структура число>"});var м_текст=String;м_текст["чародія_викликати"]=мДія("чародія_викликати",[мПарм("значення")],function(args){var value=args[0]??args["значення"];if(value["чародія_перетворити_на_текст"]){return мВикл(value["чародія_перетворити_на_текст"],[])}if(value==null){return"пусто"}if(typeof value==="string"){return value}if(typeof value==="number"){return String(value)}if(typeof value==="boolean"){return value?"так":"ні"}if(value[MAVKA]){return"<обʼєкт>"}return"<js>"});м_текст["чародія_перетворити_на_текст"]=мДія("чародія_перетворити_на_текст",[],function(){return"<структура текст>"});Object.defineProperty(м_текст.prototype,"довжина",{get(){return this.length}});Object.defineProperty(м_текст.prototype,"обрізати",{get(){return мДія("обрізати",[],()=>{return this.trim()})}});var м_Дія=Function;м_Дія["чародія_викликати"]=мДія("чародія_викликати",[],function(){return null});м_Дія["чародія_перетворити_на_текст"]=мДія("чародія_перетворити_на_текст",[],function(){return"<структура Дія>"});var м_список=Array;м_список["чародія_викликати"]=мДія("чародія_викликати",[],function(){return[]});м_список["чародія_перетворити_на_текст"]=мДія("чародія_перетворити_на_текст",[],function(){return"<структура список>"});Object.defineProperty(м_список.prototype,"довжина",{get(){return this.length}});Object.defineProperty(м_список.prototype,"додати",{get(){return мДія("додати",[],args=>{this.push(...Object.values(args));return this})}});function мДія(name,params,fn){var diiaValue=function(...args){return fn(args)};diiaValue[MAVKA]=Object.create(null);diiaValue[MAVKA].name=name;diiaValue[MAVKA].params=params;diiaValue[MAVKA].perform=fn;return diiaValue}function мСтрк(name,params,parent){var structureValue=Object.create(null);structureValue[MAVKA]=Object.create(null);structureValue[MAVKA].name=name;structureValue[MAVKA].params=parent?[...params,...parent[MAVKA].params]:params;for(const param of structureValue[MAVKA].params){const duplicateParam=structureValue[MAVKA].params.find(p=>p!==param&&p.get("назва")===param.get("назва"));if(duplicateParam){throw new Error(`[мСтрк] Властивість "${param.get("назва")}" в "${name}" вже визначено в батьківській структурі.`)}}structureValue[MAVKA].parent=parent;structureValue[MAVKA].methods=parent?[...parent[MAVKA].methods]:[];structureValue["чародія_викликати"]=мДія("чародія_викликати",[],function(args){var instance=Object.create(null);instance[MAVKA]=Object.create(null);instance[MAVKA].structure=structureValue;for(var method of structureValue[MAVKA].methods){(function(){var methodName=method.get("назва");var methodParams=method.get("параметри");var methodFn=method.get("функція");instance[methodName]=мДія(methodName,methodParams,function(methodArgs){return methodFn(instance,methodArgs)})})()}if(instance["чародія_створити"]){for(let i=0;i<structureValue[MAVKA].params.length;i++){const param=structureValue[MAVKA].params[i];const paramName=param.get("назва");instance[paramName]=param.get("значення")}мВикл(instance["чародія_створити"],args)}else{for(let i=0;i<structureValue[MAVKA].params.length;i++){const param=structureValue[MAVKA].params[i];const paramName=param.get("назва");if(args[i]!==undefined){instance[paramName]=args[i]}else if(args[paramName]!==undefined){instance[paramName]=args[paramName]}else{instance[paramName]=param.get("значення")}}}return instance});return structureValue}function мСпрд(me){if(me[MAVKA].cachedParent){return me[MAVKA].cachedParent}const parentValue=Object.create(null);parentValue[MAVKA]=Object.create(null);if(me[MAVKA].structure[MAVKA].parent){for(const method of me[MAVKA].structure[MAVKA].parent[MAVKA].methods){(function(){var methodName=method.get("назва");var methodParams=method.get("параметри");var methodFn=method.get("функція");parentValue[methodName]=мДія(methodName,methodParams,function(methodArgs){return methodFn(me,methodArgs)})})()}}me[MAVKA].cachedParent=parentValue;return parentValue}async function мМодл(name,fn){var moduleValue=Object.create(null);moduleValue[MAVKA]=Object.create(null);moduleValue[MAVKA].name=name;await fn(moduleValue);return moduleValue}function мДати(module,name,value){module[name]=value;return value}function мВМтд(structure,method){structure[MAVKA].methods.push(method)}function мМетд(name,params,fn){return new Map([["назва",name],["параметри",params],["функція",fn]])}function мПарм(name,type,defaultValue){return new Map([["назва",name],["тип",type],["значення",defaultValue]])}function мВпрм(name,type,defaultValue){return new Map([["назва",name],["тип",type],["значення",defaultValue],["варіативний",true]])}function мВстн(a,name,value){if(a==null){throw new Error(`Неможливо змінити властивіть "${name}" для "пусто".`)}if(a instanceof Map){a.set(name,value);return value}a[name]=value;return value}function мІтер(value){if(value==null){throw new Error(`Неможливо перебрати "пусто".`)}if(value[Symbol.iterator]){return value}throw new Error(`Неможливо перебрати.`)}function*мЦВід(from,to,operation,fn){if(operation==="=="){for(let i=from;i===to;i=fn(i)){yield i}}else if(operation==="<="){for(let i=from;i<=to;i=fn(i)){yield i}}else if(operation==="<"){for(let i=from;i<to;i=fn(i)){yield i}}else if(operation===">="){for(let i=from;i>=to;i=fn(i)){yield i}}else if(operation===">"){for(let i=from;i>to;i=fn(i)){yield i}}else{throw new Error(`[мЦВід] Невідома операція "${operation}".`)}}function мЦВідФ(operation,step){if(operation==="+"){return function(value){return value+step}}if(operation==="-"){return function(value){return value-step}}if(operation==="*"){return function(value){return value*step}}if(operation==="/"){return function(value){return value/step}}if(operation==="%"){return function(value){return value%step}}if(operation==="//"){return function(value){return value%step}}throw new Error(`[мЦВідФ] Невідома операція "${operation}".`)}function мПклс(a,index,value){if(a==null){throw new Error(`Неможливо встановити спеціальну властивість для "пусто".`)}var aSetSpecialFn=a["чародія_змінити_спеціальну_властивість"];if(aSetSpecialFn){return мВикл(aSetSpecialFn,[index,value])}a[index]=value;return value}function мВикл(value,args){if(value==null){throw new Error(`Неможливо виконати "пусто".`)}var valueCallFn=value["чародія_викликати"];if(valueCallFn){return мВикл(valueCallFn,args)}if(typeof value==="function"){var valueMavkaValue=value[MAVKA];if(valueMavkaValue){var valueMavkaValuePerform=valueMavkaValue.perform;if(valueMavkaValuePerform){return valueMavkaValuePerform(args)}}return value(...Object.values(args))}throw new Error("Неможливо виконати.")}function мДодт(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати додавання з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a+b}if(typeof a==="string"&&typeof b==="string"){return a+b}var aSubtractFn=a["чародія_додати"];if(aSubtractFn){return мВикл(aSubtractFn,[b])}throw new Error("Неможливо виконати додавання.")}function мВідн(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати віднімання з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a-b}var aSubtractFn=a["чародія_відняти"];if(aSubtractFn){return мВикл(aSubtractFn,[b])}throw new Error("Неможливо виконати віднімання.")}function мМнож(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати множення з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a*b}var aMultiplyFn=a["чародія_помножити"];if(aMultiplyFn){return мВикл(aMultiplyFn,[b])}throw new Error("Неможливо виконати множення.")}function мДілт(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати ділення з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a/b}var aDivideFn=a["чародія_поділити"];if(aDivideFn){return мВикл(aDivideFn,[b])}throw new Error("Неможливо виконати ділення.")}function мСтпн(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати піднесення до степеня з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return Math.pow(a,b)}var aDivDivFn=a["чародія_піднести_до_степеня"];if(aDivDivFn){return мВикл(aDivDivFn,[b])}throw new Error("Неможливо виконати піднесення до степеня.")}function мОст2(a,b){if(a==null||b==null){throw new Error(`Неможливо виконати ділення за модулем частка з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return Math.floor(a/b)}var aDivDivFn=a["чародія_поділити_за_модулем_частка"];if(aDivDivFn){return мВикл(aDivDivFn,[b])}throw new Error("Неможливо виконати множення.")}function мНегт(a){if(a==null){throw new Error(`Неможливо отримати відʼємне значення з "пусто".`)}if(typeof a==="number"){return-a}throw new Error("Неможливо виконати множення.")}function мОтрм(a,b){if(a==null){throw new Error(`Неможливо отримати властивість "${b}" з "пусто".`)}if(a instanceof Map){return a.get(b)}return a[b]}function мРівн(a,b){if(a==null&&b==null){return м_так}if(a==null||b==null){return м_ні}if(typeof a==="number"&&typeof b==="number"){return a===b?м_так:м_ні}if(typeof a==="string"&&typeof b==="string"){return a===b?м_так:м_ні}if(typeof a==="boolean"&&typeof b==="boolean"){return a===b?м_так:м_ні}if(a["чародія_порівняти_чи_рівно"]){return мВикл(a["чародія_порівняти_чи_рівно"],[b])}return a===b?м_так:м_ні}function мЄ(a,b){if(a==null&&b==null){return м_так}if(a==null||b==null){return м_ні}if(b===Number&&typeof a==="number"){return м_так}if(b===String&&typeof a==="string"){return м_так}if(b===Boolean&&typeof a==="boolean"){return м_так}if(b===Map&&a instanceof Map){return м_так}if(b===Array&&Array.isArray(a)){return м_так}if(b===Function&&typeof a==="function"){return м_так}var aMavkaValue=a[MAVKA];if(aMavkaValue){var bMavkaValue=b[MAVKA];if(bMavkaValue){var structure=bMavkaValue;while(structure){if(aMavkaValue===structure){return м_так}structure=structure[MAVKA].parent}}}return м_ні}function мБілш(a,b){if(a==null||b==null){throw new Error(`Неможливо порівняти чи більше з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a>b}if(a["чародія_порівняти_чи_більше"]){return мВикл(a["чародія_порівняти_чи_більше"],[b])}throw new Error(`Неможливо порівняти чи більше.`)}function мБірі(a,b){if(a==null||b==null){throw new Error(`Неможливо порівняти чи не менше з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a>=b}if(a["чародія_порівняти_чи_не_менше"]){return мВикл(a["чародія_порівняти_чи_не_менше"],[b])}throw new Error(`Неможливо порівняти чи не менше з "пусто".`)}function мМері(a,b){if(a==null||b==null){throw new Error(`Неможливо порівняти чи не більше з "пусто".`)}if(typeof a==="number"&&typeof b==="number"){return a<=b}if(a["чародія_порівняти_чи_не_більше"]){return мВикл(a["чародія_порівняти_чи_не_більше"],[b])}throw new Error(`Неможливо порівняти чи не більше з "пусто".`)}
/* --- /js --- */;

var м_друк;
/* --- js --- */

var м_друк = мДія("друк", [], function(args) {
  console.log(...Object.values(args));
});

/* --- /js --- */;

var м_читати;
await init_module_читати_504630307();
м_читати=module_читати_504630307;

})();
