import {PlansContainer, Card} from './plansStyle'
import SingleIcon from '../../assets/images/single.png'
import PartnerIcon from '../../assets/images/double.png'
import GroupIcon from '../../assets/images/triple.png'

export default function Plans(){
  return(
    <PlansContainer>
      <Card>
        <img src={SingleIcon} alt="Single user" width={100} />
        <h3>Single User</h3>
        <p>$149</p>
        <ul>
          <li>500 GB Storage</li>
          <li>1 User Allowed</li>
          <li>Send up to 2 GB</li>
        </ul>
        <button>Start Trial</button>
      </Card>
      <Card>
        <img src={PartnerIcon} alt="Partnership" width={100} />
        <h3>Partnership</h3>
        <p>$199</p>
        <ul>
          <li>1 TB Storage</li>
          <li>3 User Allowed</li>
          <li>Send up to 10 GB</li>
        </ul>
        <button>Start Trial</button>
      </Card>
      <Card>
        <img src={GroupIcon} alt="Group Account" width={100} />
        <h3>Group Account User</h3>
        <p>$299</p>
        <ul>
          <li>5 TB Storage</li>
          <li>10 User Allowed</li>
          <li>Send up to 20 GB</li>
        </ul>
        <button>Start Trial</button>
      </Card>


    </PlansContainer>
  )
}