# Collatz Conjecture in Python

def collatz_sequence(n):
    sequence = [n]
    while n != 1:
        if n % 2 == 0:
            n //= 2
        else:
            n = (n * 3) + 1
        sequence.append(n)
    return sequence

# Test the function
start_number = 6
print(collatz_sequence(start_number))
