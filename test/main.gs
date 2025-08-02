costumes "blank.svg";

%include inflator/assert

onflag {
    assert true, "assert";
    assert_eq "Hello", "Hello", "assert_eq";
    assert_f false, "assert_f";
}
