import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {});
  // beforeAll();
  // afterAll();

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });

});
