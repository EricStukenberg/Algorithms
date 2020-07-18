import sys 
# return only the leading bit of a number
def get_mask(x):
	binary_num = bin(x)[2:] # for num 9 get 1001, gets rid of leading 0s
	length = len(binary_num) - 1
	num = 1
	for i in range(0, length): 
   		num = num * 10
	return num              # for 9 returns 1000 

# removes leading 1 
def mask_off(x, mask):
	return x & ~mask  # bitwise and with ~(not) so for 9 1001 & 0111 (not 1000) 

# predicts solution or spot to be in to not die
def solution(x):
	return ((mask_off(x, get_mask(x)) << 1) + 1) # mask_off returns for 9 001, then 
												 # shift 1 = 010 (2) then + 1 = 011 (3)

# actual implementation of the problem 
def josephus(n):
	arr = list(range(1, n+1))
	print(arr)
	while(len(arr) > 1): 
		temp = len(arr)
		arr = arr[::2]
		print(arr)
		if(temp % 2 != 0):
			arr = arr[-1:] + arr[:-1]  

josephus(int(sys.argv[1]))
print("Be in the", solution(int(sys.argv[1])),"position to survive")


# call using python >python josephus.py 9 (or number of choosing)
