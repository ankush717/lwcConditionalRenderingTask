trigger OppUpdateTri on Opportunity (before update) 
{
     OppUpdateTriHandler.show(Trigger.new,Trigger.old);
          
}