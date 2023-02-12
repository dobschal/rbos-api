package eu.dobschal.service;

import eu.dobschal.entity.XDCEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class XDCService {

    public List<XDCEntity> getAll() {
        return XDCEntity.listAll();
    }

    @Transactional
    public void save(XDCEntity xdcEntity) throws Exception {
        xdcEntity.persist();
        xdcEntity.getProperties().forEach(xdcPropertyEntity -> xdcPropertyEntity.persist());
        if(!xdcEntity.isPersistent()) {
            throw new Exception("Could not persist entity.");
        }
    }

}
