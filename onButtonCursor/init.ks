; == [README] ===============================================
;
; - 概要 -
; 
; ティラノスクリプトの[cursor]タグでは[glink]や[button]にカーソルが
; 重なった時の画像を指定できないので、これを指定できるようにするタグ
; を突貫工事で作成
; 使い方としては、content="opt"で画像を指定したあとで、
; glink、buttonの後ろに[set_onbutton_cursor]を実行するだけ
; 10分で作ったものなので改良するかもしれないししないかもしれない
;
; - タグリファレンス -
; 
; 追加されるタグは [set_onbutton_cursor]
;  パラメーター
;     ・content
;         ・opt : カーソルがボタンに重なった時に表示するカーソル画像。
;         ・run : デフォルト値。ボタンに効果を適用する場合に使用。runの場合はcontent属性は省略可
;     ・storage : カーソル画像を指定。場所は「./data/image」下。
;                 opt時に指定するとそれがデフォルト設定になる。
;                 run時に指定するとデフォルト設定関係なく画像を指定できる。
;
; - サンプルコード -
;
; [plugin name="onButtonCursor"]
; [cursor storage="c1.png"]
; [set_onbutton_cursor content="opt" storage="c2.png"]
; [glink]
; [button]
; [set_onbutton_cursor]
;
; ===========================================================


[loadjs storage="plugin/onButtonCursor/init.js"]
[return]