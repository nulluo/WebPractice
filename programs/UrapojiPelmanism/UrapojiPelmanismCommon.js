// JavaScript source code


//■定数

//　・メッセージ
var GAME_TITLE = 'うらポジめくり';

//　・ファイル名
var REWARD_FILE = 'Komachi01';

//　・数値
//　　キャラクター種類数
var CHARACTERS_NUM = 41;

//　　ゲーム盤面の行数
//UNIMPLEMENTED：仮に定数として実装するが、ステージを複数用意するなら変数化する
var BASIC_MAX_ROWS = 10;

//　　ゲーム盤面の列数
var BASIC_MAX_COLUMNS = 8;

// 　カード横幅
var CARD_WIDTH = 47;

// 　カード縦幅
var CARD_HEIGHT = 47;

// 　制限時間
//UNIMPLEMENTED：タイマー機能未実装のため、未使用変数
var TIME_LIMIT = 360;



//グローバル関数
function zeroPadding(number, length){
    return (Array(length).join('0') + number).slice(-length);
}