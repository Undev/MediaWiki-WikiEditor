/*
 * JavaScript for WikiEditor Toolbar
 */

$( document ).ready( function() {
	if ( !$.wikiEditor.isSupported( $.wikiEditor.modules.toolbar ) ) {
		$( '.wikiEditor-oldToolbar' ).show();
		return;
	}
	// The old toolbar is still in place and needs to be removed so there aren't two toolbars
	$( '#toolbar' ).remove();
	// Add toolbar module
	// TODO: Implement .wikiEditor( 'remove' )
	$( '#wpTextbox1' ).wikiEditor(
		'addModule', $.wikiEditor.modules.toolbar.config.getDefaultConfig()
	);
    
    $('.yellow-tab').css("background", "#FFF9D8 url(http://guides.rubyonrails.org/images/tab_note.gif) no-repeat left top");
    $('.red-tab').css("background", "#F9D9D8 url(http://guides.rubyonrails.org/images/tab_red.gif) no-repeat left top");
    $('.blue-tab').css("background", "#D5E9F6 url(http://guides.rubyonrails.org/images/tab_info.gif) no-repeat left top");
    $('.green-tab').css("background", "#B7E8B8 url(http://wiki.undev.cc/images/8/8e/Tab-green.gif) no-repeat left top");

    if (typeof $ != 'undefined' && typeof $.fn.wikiEditor != 'undefined') {
        $(function () {
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'groups': {'tabs': {'label': 'Инлайн-плашки'}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'groups': {'tabs2': {'label': 'Плашки'}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs', 'tools': {'strikethrough': {label: 'Красная плашка', type: 'button', icon: 'http://wiki.undev.cc/images/e/e5/Redsquare.png', action: {type: 'encapsulate', options: {pre: "{{Tab red|", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs', 'tools': {'strikethrough': {label: 'Жёлтая плашка', type: 'button', icon: 'http://wiki.undev.cc/images/5/54/Yellowsquare.png', action: {type: 'encapsulate', options: {pre: "{{Tab yellow|", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs', 'tools': {'strikethrough': {label: 'Зелёная плашка', type: 'button', icon: 'http://wiki.undev.cc/images/9/9b/Greensquare.png', action: {type: 'encapsulate', options: {pre: "{{Tab green|", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs', 'tools': {'strikethrough': {label: 'Синяя плашка', type: 'button', icon: 'http://wiki.undev.cc/images/8/87/Bluesquare.png', action: {type: 'encapsulate', options: {pre: "{{Tab blue|", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs', 'tools': {'strikethrough': {label: 'Серая плашка', type: 'button', icon: 'http://wiki.undev.cc/images/1/1e/Greysquare.png', action: {type: 'encapsulate', options: {pre: "{{Tab grey|", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Issue', type: 'button', icon: 'http://wiki.undev.cc/images/e/e9/Ambox_warning.png', action: {type: 'encapsulate', options: {pre: "{{issue|заголовок|текст", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Info', type: 'button', icon: 'http://wiki.undev.cc/images/c/c8/Ambox_notice.png', action: {type: 'encapsulate', options: {pre: "{{Notice|текст", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Delete', type: 'button', icon: 'http://wiki.undev.cc/images/9/98/Ambox_deletion.png', action: {type: 'encapsulate', options: {pre: "{{Delete|причина", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Move', type: 'button', icon: 'http://wiki.undev.cc/images/0/05/Ambox_move.png', action: {type: 'encapsulate', options: {pre: "{{Move|Песочница|причина", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Outdated', type: 'button', icon: 'http://wiki.undev.cc/images/8/8e/Ambox_outdated.png', action: {type: 'encapsulate', options: {pre: "{{Outdated", post: "}}"}}}}});
            $('#wpTextbox1').wikiEditor('addToToolbar', {'section': 'main', 'group': 'tabs2', 'tools': {'strikethrough': {label: 'Infobox', type: 'button', icon: 'http://wiki.undev.cc/images/e/e9/40px-Crystal_Clear_action_run.png', action: {type: 'encapsulate', options: {pre: "{{Infobox \n| name = Телегайд \n| status = stable \n| type = Сервис \n| description = Собирает и предоставляет программу ТВ передач для других проектов \n| PM = [[User:stepashka|Аня]] \n| developers = [[User:Over|Миша]], [[User:prepor|Андрей]] \n| projects = [[Телемаркер]], [[AdMonitor]] \n| last-update = 23.08.2011 \n| download = [http://git.undev.cc/teleguide teleguide] \n| redmine = [http://pm.undev.cc/projects/teleguide teleguide] \n| details = Телегайд (Карточка проекта)", post: "}}"}}}}});
        });
    };
} );
