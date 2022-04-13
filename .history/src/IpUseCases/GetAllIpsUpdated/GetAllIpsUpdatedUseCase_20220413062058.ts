
class getAllIpsUpdatedUseCase {

    execute(req, res) {
        this.ipDB.getAllIpsUpdated((data) => {
          res.status(200).send(data);
        });
      }
}