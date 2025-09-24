costumes "blank.svg";

%include inflator/assert

onflag {
    assert true, "assert";
    assert_eq "Hello", "Hello", "assert_eq";
    assert_f false, "assert_f";

    # test failures without breaking
    assert false, "assert fail", true;
    assert_eq 9 + 10, 21, "assert_eq fail: ", true;
    assert_f true, "assert_f fail", true;
}
