#include "catch.hpp"
#include "Stack.h"

TEST_CASE("operator =", "[stack]")
{
  Stack s1;
  s1.push(10);
  Stack s2(s1);
  Stack s3 = s1;

  REQUIRE(s2.size()==s3.size());
  REQUIRE(s2.maxsize()==s3.maxsize());

  for(int i=0;i<s3.size();i++)
    REQUIRE(s3.getPile()[i]==s2.getPile()[i]);

}
