import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import {
  Grid,
  Header,
  Loader,
  Label,
  Form,
  Input,
  Button,
  Dimmer,
  Segment,
  Card,
  Icon,
  Image,
  Container
} from "semantic-ui-react";

import { DynamicPages } from "/imports/api/dynamic_pages/dynamic_pages";
import DynamicPageForm from "/imports/components/dynamic_pages/DynamicPageForm";

export class AdminPages extends Component {
  remove_page = page_id => {
    Meteor.call("dynamic_pages.remove", page_id, (err, res) => {
      if (err) {
        Bert.alert({
          title: "Can't remove",
          message: err,
          type: "danger",
          style: "growl-bottom-right"
        });
      } else {
        console.log("remove");
        Bert.alert({
          title: "Page removed",
          type: "success",
          style: "growl-bottom-right"
        });
      }
    });
  };

  render() {
    const { loading, dynamic_pages } = this.props;
    if (!loading) {
      return (
        <Grid stackable>
          <Container>
            <Grid.Column width={16}>
              <Header as="h1">Administration des pages dynamiques</Header>
              <DynamicPageForm />
            </Grid.Column>
            <Grid.Column width={16}>
              <Grid>
                {dynamic_pages.map(page => {
                  return (
                    <Grid.Column key={page._id} width={4}>
                      <Card>
                        <Image src={page.image_url} />
                        <Card.Content>
                          <Card.Header>{page.title}</Card.Header>
                          <Card.Description>
                            {page.description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Button
                            onClick={() => this.remove_page(page._id)}
                            basic
                            color="red"
                          >
                            Remove
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Grid.Column>
          </Container>
        </Grid>
      );
    } else {
      return (
        <Dimmer active inverted>
          <Loader>Chargement des pages</Loader>
        </Dimmer>
      );
    }
  }
}

export default (AdminPagesContainer = withTracker(() => {
  const dynamicPagesPublication = Meteor.subscribe("dynamic_pages.all");
  const loading = !dynamicPagesPublication.ready();
  const dynamic_pages = DynamicPages.find({}).fetch();
  return {
    loading,
    dynamic_pages
  };
}))(AdminPages);
