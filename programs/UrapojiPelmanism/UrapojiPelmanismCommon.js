// JavaScript source code


//���萔

//�@�E���b�Z�[�W
var GAME_TITLE = '����|�W�߂���';

//�@�E�t�@�C����
var REWARD_FILE = 'Komachi01';

//�@�E���l
//�@�@�L�����N�^�[��ސ�
var CHARACTERS_NUM = 41;

//�@�@�Q�[���Ֆʂ̍s��
//UNIMPLEMENTED�F���ɒ萔�Ƃ��Ď������邪�A�X�e�[�W�𕡐��p�ӂ���Ȃ�ϐ�������
var BASIC_MAX_ROWS = 10;

//�@�@�Q�[���Ֆʂ̗�
var BASIC_MAX_COLUMNS = 8;

// �@�J�[�h����
var CARD_WIDTH = 47;

// �@�J�[�h�c��
var CARD_HEIGHT = 47;

// �@��������
//UNIMPLEMENTED�F�^�C�}�[�@�\�������̂��߁A���g�p�ϐ�
var TIME_LIMIT = 360;



//�O���[�o���֐�
function zeroPadding(number, length){
    return (Array(length).join('0') + number).slice(-length);
}