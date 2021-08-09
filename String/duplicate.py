from collections import Counter

val = input('enter the string to find duplicate value : ')
word_length = Counter(val);
for k,v in word_length.items():
    if v>1:
        print(f'The Frequency of {k} is {v} times') 