import shutil

#array = [59,63,73,82,49,78,71,76,78,82,84,140,142,144,146,148,150,152]  # 安全监督模块
# array = [71,78,49,82,84,140,142,144,146,148,152,153,40,45,47,49,155,157,161,26,29,32,71,76]
array = [26,29,32,130,133,136]
target = 'D:\project\Lzj\_bim/修改模板'

# array = [40,42,45,47,49,54,56,153,155,157,161,163,165]
# target = 'D:\project\Lzj\_bim/质量监督流程模板'


source = ''

def copys(obj):
  source = 'D:\project\Lzj\_bim\PCWeb\src\mock/%d.json' % (obj)
  shutil.copy(source, target)
  print('复制成功',source)

for i in array:
  copys(i)

# source = 'D:\project\Lzj\_bim\PCWeb\src\mock/152.json'
# target = 'D:\project\Lzj\_bim/安全监督流程模板'
# shutil.copy(source, target)
# print('ok')

