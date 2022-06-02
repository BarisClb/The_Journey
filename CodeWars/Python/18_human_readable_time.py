# Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)


# MY ANSWER

def make_readable(seconds):
    HH = str(seconds//(60*60))
    MM = str(seconds%(60*60)//60)
    SS = str(seconds%(60*60)%60)
    return ("%02d" % int(HH)) + ":" + ("%02d" % int(MM)) + ":" + ("%02d" % int(SS))



# BEST ANSWERS



# def make_readable(s):
#     return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)




# def make_readable(seconds):
#     hours, seconds = divmod(seconds, 60 ** 2)
#     minutes, seconds = divmod(seconds, 60)
#     return '{:02}:{:02}:{:02}'.format(hours, minutes, seconds)




# def make_readable(seconds):
#     h= seconds/60**2
#     m= (seconds%60**2)/60
#     s= (seconds%60**2%60)
#     return "%02d:%02d:%02d" % (h, m, s)
#     # Do something




# def make_readable(seconds):
#     m, s = divmod(seconds, 60)
#     h, m = divmod(m, 60)
#     return "%02d:%02d:%02d" % (h, m, s)




# def make_readable(n):
#     return f'{n//3600:02d}:{(n%3600)//60:02d}:{n%60:02d}'
