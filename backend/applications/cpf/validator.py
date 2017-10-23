def calc_checker1(first_nine_digits):
    var_sum = 0

    for i in range(9):
        var_sum += int(first_nine_digits[i]) * (10 - i)

    last_sum_checker1 = var_sum % 11
    checker1 = 0 if last_sum_checker1 < 2 else 11 - last_sum_checker1

    return checker1


def calc_checker2(cpf_with_checker1):
    var_sum = 0

    for i in range(10):
        var_sum += int(cpf_with_checker1[i]) * (11 - i)

    last_sum_checker2 = var_sum % 11
    checker2 = 0 if last_sum_checker2 < 2 else 11 - last_sum_checker2

    return checker2


def is_valid_cpf(number):
    first_nine_digits = number[0: 9]
    checker = number[9: 11]

    if len(number) != 11:
        return False

    for i in range(10):
        if '' + first_nine_digits + checker == "".join(str(i) * 11):
            return False

    checker1 = calc_checker1(first_nine_digits)
    checker2 = calc_checker2('' + first_nine_digits + str(checker1))

    if str(checker) == str(checker1) + str(checker2):
        return True
    else:
        return False
