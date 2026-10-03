// ==UserScript==
// @name         BetterVacBan
// @namespace    http://tampermonkey.net/
// @version      2026-09-09
// @description  Few tweaks I like
// @author       xeon_leon
// @match        https://vacban.wtf/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vacban.wtf
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const css = `
    /* Set Backgrounds */
    div.p-pageWrapper#top,
    nav.p-nav.p-navSticky.p-navSticky--primary,
    div.p-body-sidebar.p-body-sidebar--main.is-active,
    div.block-container,
    div.menu-content,
    div.menu-header {
        background: #110023 !important;
        background-color: #110023 !important;
    }

    div.vb__econ,
    div.p-staffBar {
        background: #0000 !important;
        background-color: #0000 !important;
    }

    li.pageNav-page.pageNav-page--current,
    li.pageNav-page.pageNav-page--later,
    li.pageNav-page.pageNav-page--skip.pageNav-page--skipEnd,
    li.pageNav-page,
    li.pageNav-jump.pageNav-jump--next,
    ul.pageNav-page {
        background: #5a058a73 !important;
        background-color: #5a058a73 !important;
    }

    li.pageNav-page {
        color: #FFFFFF !important;
    }

    div.inlineModBar {
        background: #FFA50080 !important;
        background-color: #FFA50080 !important;
    }

    /* Remove Elements Completely */
    a.vacpWidget,
    a.discordWidget,
    div.block.lfs[data-xf-init="lfs"],
    div.partners.patsets.slick-initialized.slick-slider,
    div.block-container.padchanger.paarrow,
    div.news-ticker.block-container,
    div.notice-container,
    div.vb__resource__welcome__banner {
        display: none !important;
    }
`;

const style = document.createElement('style');
style.textContent = css;
(document.head || document.documentElement).appendChild(style);

// DOM cleanup to permanently delete nodes
document.addEventListener('DOMContentLoaded', () => {
    const removeTargets = () => {
        const selectors = [
            'a.vacpWidget',
            'a.discordWidget',
            'div.block.lfs[data-xf-init="lfs"]',
            'div.partners.patsets.slick-initialized.slick-slider',
            'div.block-container.padchanger.paarrow',
            'div.news-ticker.block-container',
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (selector.includes('partners') && el.parentElement && el.parentElement.tagName === 'DIV') {
                    el.parentElement.remove();
                } else {
                    el.remove();
                }
            });
        });
    };

    removeTargets();
    new MutationObserver(removeTargets).observe(document.body, { childList: true, subtree: true });
});

})();
