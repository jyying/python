# num = 1
# while num <= 9:
# 	col = 1
# 	while col <= num:
# 		print('%d * %d = %d' % (col,num,col * num), end="  ")
# 		col += 1
# 	num += 1
# 	print("")


def surface(obj='name'):
    nums = list(range(1, 10))
    for i in nums:
        col = 1
        while col <= i:
            print('%d * %d = %d' % (col, i, col*i), end="  ")
            col += 1
        print('')
    return nums


def print_line(chare='*', nums=50):
    print(chare * nums)


string = "中文"
