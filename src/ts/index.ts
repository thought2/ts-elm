type Ports = {
  sendOut: PortFromElm<String>;
  sendIn: PortToElm<String>;
};

const app = <T>({ ports }: ElmComponent<Ports>): void => {
  ports.sendOut.subscribe(data => {
    console.log(data + '!!!');
  });

  setInterval(() => ports.sendIn.send('tick'), 1000);
};

export default app;
