import socketMiddleware from 'utils/socket_io_middleware';
import expect from 'expect';


describe('Middleware::Api', function(){
  let store, next;
  var socket = {
    emit: expect.createSpy()
  };

  beforeEach(function(){
    store = {};
    next = expect.createSpy();
  });

  describe('when action is without CALL_API', function(){
    it('passes the action to next middleware', function(){
      const action = {
        type: 'START_SESSION'
      };
      socketMiddleware(socket)(store)(next)(action);
      expect(next).toHaveBeenCalledWith(action);

    });

    it('passes the action to next middleware', function(){
      const action = {
        type: 'START_SESSION',
        meta:{remote: true}
      };
      socketMiddleware(socket)(store)(next)(action);
      expect(socket.emit).toHaveBeenCalledWith('action', action);
      expect(next).toHaveBeenCalledWith(action);

    });
  });
});
