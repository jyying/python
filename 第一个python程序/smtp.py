import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header

msg = MIMEMultipart()
msg['from'] = Header('发件人', 'utf-8')
msg['To'] = Header('管理员', 'utf-8')
msg['Subject'] = Header('主题name', 'utf-8')

msg.attach(MIMEText('hello 啊锅', 'plain', 'utf-8'))

my_sender = '563651505@qq.com'
my_pass = 'gowrdimxkfnlbcag'

# att1 = MIMEText(open('C:/Users/56365/Desktop/bim问题.txt', 'rb'), 'base64', 'utf-8')
# att1['Content-Type'] = 'application/octet-stream'
# att1['Content-Disposition'] = 'attachment; filename="test.txt"'

# att2 = MIMEText(open('C:/Users/56365/Desktop/714AF9B30036202500EC827F4C2D8730.jpg', 'rb'), 'image', 'jpg')
# att2['Content-Type'] = 'application/octet-stream'
# att2['Content-Disposition'] = 'attachment; filename="img.jpg"'
createVar = locals()
# msg.attach(att1)
# msg.attach(att2)

def add_header(object):
  types = object['types']
  index = object['index']
  url = object['url']
  fileType = 'base64'
  fileFormat = 'utf-8'
  createVar['att'+index] = MIMEText(open(url, 'rb').read(), fileType, fileFormat)
  createVar['att'+index]['Content-Type'] = 'application/octet-stream'
  createVar['att'+index]['Content-Disposition'] = 'attachment; filename="test.txt"'
  if(types == 'txt'):
    print('2')

  return createVar['att'+index]

att3 = add_header({'types':'txt','index':'3','url':'C:/Users/56365/Desktop/bim问题.txt'})

msg.attach(att3)

def sendMail():
  ret = True
  try:
    smtpObj = smtplib.SMTP_SSL('smtp.qq.com',465)
    smtpObj.login(my_sender,my_pass)
    to_addrs = ['563651505@qq.com']
    smtpObj.sendmail(my_sender,to_addrs,msg.as_string())
    smtpObj.quit()
  except Exception:
    ret = False
  return ret

ret = sendMail()
print(ret)
