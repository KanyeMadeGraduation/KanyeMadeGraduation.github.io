---
title: Games
auto-header: none
icon: fa-gamepad
order: 2
---
{%- assign _sections = site.games | sort: 'order' -%}
<!-- Main -->
<div id="main-container">
    <div id="section-container">
        {%- for game in _sections -%}
            <section class="full-container">
                <div class="grid-item preview-img" style="background-image: url('{{- game.game_img -}}');"></div>
                <div class="grid-item preview-box">
                    <span style="font-weight: 600;">{{- game.game_name -}}</span>
                    <div class="badges">
                        {%- for badge in game.game_badges -%}
                            <h6 class="badge color_dark"><span class="icon-b fa-{{- badge.icon -}}">{{- badge.text -}}</span></h6>
                        {%- endfor -%}
                    </div>
                    <br>
                    <h4 class="section-text" style="margin-left: 0;">
                        {{- game.game_desc -}}
                    </h4>
                    <br>
                    <div>
                        <button class="glow-on-hover" onclick="window.location.href='/{{- game.slug -}}';">
                            <span class="icon fa-arrow-right">View cheats</span>
                        </button>
                    </div>
                </div>
            </section>
        {%- endfor -%}
    </div>
</div>