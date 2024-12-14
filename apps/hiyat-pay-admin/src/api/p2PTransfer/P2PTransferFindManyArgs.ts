import { P2PTransferWhereInput } from "./P2PTransferWhereInput";
import { P2PTransferOrderByInput } from "./P2PTransferOrderByInput";

export type P2PTransferFindManyArgs = {
  where?: P2PTransferWhereInput;
  orderBy?: Array<P2PTransferOrderByInput>;
  skip?: number;
  take?: number;
};
