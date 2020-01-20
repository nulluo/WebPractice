// JavaScript source code

//定数
var PrecureMaxNum = 41;
var ChallengeMaxNum = 10;       //チャレンジ最大数
var QuestionStockMaxNum = 71;   //問題ストック数




//問題の初期化（用意された問題から、ランダムにChallengeMaxNum個の問題を抽出し、チャレンジ配列にセット）
function InitializeQuestions() {

    challenges = new Array(ChallengeMaxNum);

    //デバッグコード；
    console.log("問題番号初期化開始");
    for (var i = 0; i <= ChallengeMaxNum - 1; i++) {
        //問題IDをランダムに1個選択
        var questionID = Math.floor(Math.random() * QuestionStockMaxNum);

        //デバッグコード；
        console.log("%d:%d", i, questionID);

        //既に選んだ問題と重複した場合は選びなおす
        var duplicated = false;
        for (var j = 0; j <= i; j++) {
            if (questionID === challenges[j]) {
                duplicated = true;
                break;
            }
        }

        if (duplicated) {
            //重複したので選びなおし
            i--;
        } else {
            challenges[i] = questionID;
        }
    }

    //未実装：デバッグコード
    ShowShuffledQuestion();
}

//問題IDから正解のプリキュアIDを取得
function GetAnswerOfQuestion(questionID) {
    switch (questionID) {
        case 0: return "0101";
        case 1: return "0101";
        case 2: return "0102";
        case 3: return "0902";
        case 4: return "0805";
        case 5: return "0301";
        case 6: return "0502";
        case 7: return "0201";
        case 8: return "0404";
        case 9: return "0701";
        case 10: return "0601";
        case 11: return "0401";
        case 12: return "0101";
        case 13: return "0101";
        case 14: return "0103";
        case 15: return "0102";
        case 16: return "0202";
        case 17: return "0202";
        case 18: return "0201";
        case 19: return "0201";
        case 20: return "0306";
        case 21: return "0306";
        case 22: return "0305";
        case 23: return "0302";
        case 24: return "0303";
        case 25: return "0304";
        case 26: return "0401";
        case 27: return "0402";
        case 28: return "0403";
        case 29: return "0502";
        case 30: return "0501";
        case 31: return "0601";
        case 32: return "0603";
        case 33: return "0602";
        case 34: return "0704";
        case 35: return "0703";
        case 36: return "0702";
        case 37: return "0705";
        case 38: return "0803";
        case 39: return "0801";
        case 40: return "0802";
        case 41: return "0901";
        case 42: return "0902";
        case 43: return "0903";
        case 44: return "0904";
        case 45: return "1003";
        case 46: return "1001";
        case 47: return "1001";
        case 48: return "1002";
        case 49: return "1002";
        case 50: return "1004";
        case 51: return "1004";
        case 52: return "0101";
        case 53: return "0102";
        case 54: return "0305";
        case 55: return "0304";
        case 56: return "0403";
        case 57: return "0402";
        case 58: return "0404";
        case 59: return "0401";
        case 60: return "0502";
        case 61: return "0504";
        case 62: return "0503";
        case 63: return "0804";
        case 64: return "0701";
        case 65: return "0705";
        case 66: return "0903";
        case 67: return "0801";
        case 68: return "0201";
        case 69: return "0101";
        case 70: return "0704";

    }

}

//引数　：作品IDを無視して なぎさ=0,ほのか=1,,,と続く連番
//戻り値：連番をプリキュアIDに変換した結果
function GetPrecureID(sequentialID) {
    switch (sequentialID) {
        case 0: return '0101';
        case 1: return '0102';
        case 2: return '0103';
        case 3: return '0201';
        case 4: return '0202';
        case 5: return '0301';
        case 6: return '0302';
        case 7: return '0303';
        case 8: return '0304';
        case 9: return '0305';
        case 10: return '0306';
        case 11: return '0401';
        case 12: return '0402';
        case 13: return '0403';
        case 14: return '0404';
        case 15: return '0501';
        case 16: return '0502';
        case 17: return '0503';
        case 18: return '0504';
        case 19: return '0601';
        case 20: return '0602';
        case 21: return '0603';
        case 22: return '0604';
        case 23: return '0701';
        case 24: return '0702';
        case 25: return '0703';
        case 26: return '0704';
        case 27: return '0705';
        case 28: return '0801';
        case 29: return '0802';
        case 30: return '0803';
        case 31: return '0804';
        case 32: return '0805';
        case 33: return '0901';
        case 34: return '0902';
        case 35: return '0903';
        case 36: return '0904';
        case 37: return '1001';
        case 38: return '1002';
        case 39: return '1003';
        case 40: return '1004';
    }
}

//与えられた桁数に数値を0埋めする関数
//引数：num…0埋めしたい数
//　　：digit…桁数
function Padding(num, digit) {
    var ret = num;
    for (i = 1; i <= digit; i++) {
        ret = "0" + ret;
    }
    return ret.slice(0 - digit);
}


