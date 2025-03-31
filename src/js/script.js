function langList(e){
    const $element = $(e);
    const $menuEl = $element.next('.link_lang');
    $menuEl.slideToggle(400);
    const $arrow = $element.closest('.language_list').siblings('.list_arrow');
    $arrow.toggleClass('arrow_rotate');
}

function changeLang(e){
    const $elem = $(e);
    // const $sib = $element.siblings('')
}