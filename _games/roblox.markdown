---
title: Roblox
order: 2
layout: default

game_name: Roblox
game_desc: The latest unpatched exploits! We offer script executors for all platforms, external AI aimbots, external ESP, and more!
game_img: /assets/img/roblox.jpg
game_badges:
  - text: Windows
    icon: windows
  - text: iOS
    icon: apple
  - text: Android
    icon: android
---
{%- assign _sections = site.data.roblox | sort: 'order' -%}
{%- include header.html scrolly_nav=_sections -%}
<!-- Main -->
<div id="main">
    <article class="shade-two">
        <div class="container">
            <div id="main-container">
                <div id="section-container">
                    {%- for section in _sections -%}
                        <div id="{{- section.title | downcase | replace:' ','-' -}}">
                        <h3>{{- section.title -}}</h3>
                            <section class="grid-container">
                                {%- for client in section.clients -%}
                                    <div class="grid-item">
                                        <h3>{{- client.name -}}</h3>
                                        <div class="badges">
                                            {%- for badge in client.badges -%}
                                                <h6 class="badge rainbow_{{- badge.class -}}">{{- badge.text -}}</h6>
                                            {%- endfor -%}
                                        </div>
                                        <h4 class="section-text">
                                            {{- client.desc -}}
                                        </h4>
                                        <div>
                                            {%- for download in client.download -%}
                                                <button class="glow-on-hover" onclick="window.location.href='{% if download.link %}/ads.html?ad={{- download.link -}}{% endif %}{% if download.direct %}{{- download.direct -}}{% endif %}';"><span class="icon{% if download.brand %}-b{% endif %} fa-{{- download.icon -}}">{{- download.text -}}</span></button>
                                            {%- endfor -%}
                                        </div>
                                    </div>
                                {%- endfor -%}
                            </section>
                        </div>
                    {%- endfor -%}
                </div>
            </div>
        </div>
    </article>
</div>