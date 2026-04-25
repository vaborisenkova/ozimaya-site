#!/usr/bin/env python3
"""Парсер новостей с betaren.ru для озимая.рф"""
import json, re, sys
from urllib.request import urlopen, Request
from pathlib import Path
from html import unescape

OUT = Path("/var/www/ozimaya-site/news.json")

def fetch_news():
    req = Request("https://betaren.ru/news/", headers={"User-Agent": "Mozilla/5.0"})
    html = urlopen(req, timeout=15).read().decode("utf-8", errors="ignore")
    
    # Find news links and titles
    items = re.findall(r'<a[^>]*href="(/news/[^"?]+)"[^>]*>.*?(?:<[^>]*>){1,5}([^<]{10,200})</', html, re.DOTALL)
    
    seen = set()
    news = []
    for url, title in items:
        title = unescape(title.strip())
        if url in seen or len(title) < 15 or '?PAGEN' in url:
            continue
        seen.add(url)
        news.append({
            "title": title,
            "url": f"https://betaren.ru{url}",
            "source": "betaren.ru"
        })
        if len(news) >= 10:
            break
    
    # Фильтр: убрать нежелательные новости
    exclude = ['Кречет']
    news = [n for n in news if not any(e in n['title'] for e in exclude)]
            break
    
    OUT.write_text(json.dumps(news, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(news)} news items to {OUT}")
    return news

if __name__ == "__main__":
    fetch_news()
