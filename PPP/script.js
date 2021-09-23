text_english = [
    "Procrastination<br>Prevention<br>Planner",
    "日本語▶",
    "CONTENTS",
    "This calendar is an application that makes a Gantt chart for your homework. A Gantt chart is a chart that graphs out your plans, and this is creates a Gantt chart optimized for homework. 4 different types of tasks can be created, and this app will split the time up evenly.",
    "USAGE",
    "MENU",
    "First, extract the file HWC.zip, and run the executable ProcrastinationPreventionCalendar.exe. There will be the logo and 3 buttons. The blue one brings you to the calendar. The green one will open a help page in a browser. The purple one will close the application.",
    "CALENDAR",
    "On the calendar screen, you will find a + button, a ▢ button, a save button, a load button, the date, and a large screen. You can zoom in and out on the screen by using the scroll wheel, and you can pan around by dragging with the middle mouse button.",
    "When you click the + button in the left corner, a popup will appear that can make a new task. There are 4 buttons on the popup. In order from the top, these buttons are the reading button, the drill button, the writing button, and the break button. When you click any of the 4 buttons, a new popup will appear. Here, you can set the details, such as the title or the deadline. Pressing the button the bottom of the page will create the task, which is a stick in a Gantt chart with a label. If it is a Reading or drill task, it will split the work up equally, and the writing task will split the time into planning time, drafting time, and publishing time. If it is a break, it will assign no work during the time.",
    "When you click on a task, the task's edit menu will open. Clicking the … button will open the editing menu, and clicking the trash can button will delete the task. The dates right next to the delete button are the start and end dates. You can close the menu by clicking somewhere that is not the task.",
    "When you click on the save button, a popup will appear with all of the saves for the calendar. You can type the name of an existing save to overwrite it, or you can type in a new name. It will save your calendar on your hard drive, at C:\Users\*Username*\AppData\LocalLow\RintaroKawasaki\ProcrastinationPreventionPlanner\PPP. When you click on the load button, a popup will appear with all of the saves for the calendar. You can type in the name of an existing save to load. Nothing will happen if you try to load a save that doesn't exist.",
    "Clicking the ▢ button in the right corner will show a popup with a list of the tasks for that day."
]
text_japanese = [
    "怠慢ダラダラ<br>防止<br>プランナー",
    "English▶",
    "内容",
    "これはガントチャートを作ってくれる宿題用カレンダーです。ガントチャートとは、計画を棒グラフにして表示する表で、ぼくがつくったのは、ガントチャートを宿題用にしたものです。四種類の課題を作ることができ、宿題を等分してくれます。",
    "使い方",
    "メニュー",
    "まず、HWC.zipを展開し、その中のPPP.exeを開きます。そこには、ロゴと三つのボタンがあります。青いボタンを押すとカレンダーに行きます。緑のボタンを押すとヘルプページがブラウザで開きます。紫のボタンを押すとアプリが閉じます。",
    "カレンダー",
    "そこには、＋ボタン、▢ボタン、保存ボタン、ロードボタン、今日の日付と大きな画面があります。この画面はスクロールでズームイン・ズームアウトできて、ミドルクリックをドラッグすると、動き回れます。左上の＋ボタンを押すと、新しい予定を作るメニューが出てきます。そこには四つボタンがあります。これらは上から順に、読書の宿題、ドリルの宿題、作文の宿題、そして休みです。どれかのボタンを押すと、また新しいメニューが出てきます。ここで、宿題の名前や提出日などを設定します。その後下のボタンを押すと、画面に新しいラベルがついている棒ができます。読書とドリルは量を等分してくれて、作文は時間を予定と下書きと清書に分けてくれます。休みは、その間に宿題ができないようになってます。",
    "画面の中の棒をクリックすると、編集メニューが出てきます。これは、棒以外のところをクリックすると閉じます。このメニューで…ボタンを押すと、名前や提出日などを変えるメニューが出てきます。ゴミ箱ボタンを押すと、そのぼうがきえます。",
    "保存ボタンを押すと、そのパソコンに保存されているカレンダーの一覧が表示されます。入力欄に、実在するファイル名を入れると、上書きされます。まだないファイル名を入れると、新しいファイルができます。C:\Users\*ユーザー名*\AppData\LocalLow\RintaroKawasaki\ProcrastinationPreventionPlanner\PPPに保存されます。ロードボタンを押すと、そのパソコンに保存されているカレンダーの一覧が表示されます。その中から一つ選び、入力欄にファイル名を入れると、それをロードできます。存在しないファイル名を入れると、何も起こりません。",
    "右上の▢ボタンを押すと、その日にある宿題をリストにして表示してくれます。",
    ""
]
language = "en"

$(".langbtn").click(function() {
    if (language == "en") {
        language = "jp"
    } else {
        language = "en"
    }
    for (i = 0; i < $(".text").length; i ++) {
        if (language == "en") {
            $(".text").eq(i).html(text_english[i])
        } else {
            $(".text").eq(i).html(text_japanese[i])
        }
    }
})