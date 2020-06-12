import requests
import re
import os
from bs4 import BeautifulSoup
import time

# os.mkdir('src')
# not 布尔值取反
if(not os.path.exists('./src')): os.mkdir('src')

Url = 'http://www.biquge.info/12_12985/'

# 生成文本
def text_create(name, msg, types='txt',route=''):
    desktop_path = "./" + route  # 新创建的txt文件的存放路径
    full_path = desktop_path + name +'.' + types  # 也可以创建一个.doc的word文档
    file = open(full_path, "w",encoding='utf-8')
    file.write(msg)

def getReq(url):
  time.sleep(2)
  strhtml = requests.get(url)
  strhtml.encoding='utf-8'
  return strhtml.text

def getText(data,title=''):
  for item in data:
    text = item.get_text()
    text_create(title,text,'txt','src/')


# url = 'http://www.biquge.info/12_12985/'

# strhtml = requests.get(url)
# strhtml.encoding='utf-8'

soup=BeautifulSoup(getReq(Url),'lxml')
data = soup.select('#list > dl > dd > a')
result = {}
num = 0
for item in data:
    if (num == 3): break
    text = item.get_text()
    href = item.get('href')
    result[num] = {
        'title':text,
        'link':href
    }
    _soup =BeautifulSoup(getReq(Url+href),'lxml') 
    _data = _soup.select('#content')
    getText(_data,text)
    # text_create(text,text,'html','src/')
    num = num+1

# strText = str(strhtml.content,'utf-8')

# text_create('baidu', str(result))
# print(data)
# print(strhtml.text)
