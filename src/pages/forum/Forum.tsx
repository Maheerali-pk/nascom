import React from 'react'
import { joinACommunity } from '../../apis/forum';
import { useGlobalContext } from '../../contexts/GlobalContext';

function Forum() {
    const [community, setCommunity] = React.useState('react');
    const [dispatch] = useGlobalContext();

    const handleChange = async(event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ setState: { loading: true } });
        try {
           await joinACommunity({ community });
        } catch (err: any) {
           Swal.fire({ text: err.toString(), icon: "error", color: "red" });
        }
        dispatch({ setState: { loading: false } });
    }
    
  return (
    <div>
        <h1>Select a community to join the forum</h1>
        <select value={community} onChange={handleChange} title="community">
            <option value="farming">Farming</option>
            <option value="gardening">Gardening</option>
        </select>
    </div>
  )
}

export default Forum;
