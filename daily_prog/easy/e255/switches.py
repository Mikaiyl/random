#!/usr/bin/python2.7
import sys

# Used in debugging
def init_arr(N):
    arr = []
    for i in range(0,int(N)):
        arr.append(False)
    return arr

# The switch function
def switch_arr(arr,start,stop):
    if (stop < start):
        stop,start = start,stop
    for i in range(start,stop+1):
        arr[i] = not arr[i]
    return arr

# Parse input from text file
def parse_text(txt):
    open_file = open(txt,"r").read().split("\n")
    open_file.pop()
    init_val = open_file.pop(0)
    return init_val,open_file

def split_array(txt_input,rl):
    init_val,open_file = parse_text(txt_input)
    out = []
    for i in range(0,len(open_file)):
        out.append(open_file[i].split()[rl])
    return out

# Find how many lights are on
def find_true(arr):
    count = 0
    for i in range(len(arr)):
        if arr[i] == True:
            count += 1
    return count

# Real main function
def real_main(arg):
    Num,dumb = parse_text(arg) 
    answer_array = init_arr(Num)
    right = left = [] 
    right = split_array(arg,1)
    left = split_array(arg,0)
    for i in range(0,len(right)):
        answer_array = switch_arr(answer_array,int(right[i]),int(left[i]))
    return answer_array,find_true(answer_array)

if __name__ == '__main__':
    print(real_main(sys.argv[1]));

