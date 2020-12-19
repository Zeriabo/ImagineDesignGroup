import { useTransition } from 'react-spring'
import { useState, useEffect } from "react";

const useTrans =() => {

      
  useEffect(() => {   
 return useTransition(this.state.index, p => p, {
    from: { opacity: -1, transform: 'translate3d(20%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
}, []);

};
function Trans(){
   return useTrans();

}
export default Trans;
