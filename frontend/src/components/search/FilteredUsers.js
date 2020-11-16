import React from "react"
import { Card, Col, Icon, Row } from "react-materialize"
import { Link } from "react-router-dom"

let defaultimg =
  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"

const FilteredUsers = ({ user }) => {
  return (
    <div>
      <Row>
        <Col s={12}>
          <Card
            key={1}
            className="white profileCard"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            title={user.fullname}
          >
            <div className="col s2 profileimg left searchImg">
              <img
                src={user.picture ? user.picture : defaultimg}
                alt="Profile img is not found"
                className="circle responsive-img"
              />
            </div>
            <h6>
              <Link to={`/profiles/${user._id}`}>Go to profile</Link>
            </h6>
            {user.about ? (
              <p>{user.about}</p>
            ) : (
              <p>
                User doesn't have any information about himself/herself yet.
              </p>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FilteredUsers
