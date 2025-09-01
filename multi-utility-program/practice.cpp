#include<iostream>
using namespace std;
class mysystem 
{

    public : void method()
    {
        cout<<"lund";
    }
};

class two: public mysystem
{
    public: int variable = 10;
    public: void method()
    {
        cout<<"Hi";
    }
};

class three: public two , public mysystem
{
    public: void method()
    {
        cout<<variable;
    }
};
int main()
{
    three obj;
    obj.method();

    
    return 0;
}