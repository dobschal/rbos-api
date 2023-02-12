package eu.dobschal.service;

import eu.dobschal.entity.XDCEntity;
import eu.dobschal.entity.XDCPropertyEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class XDCService {

    @Transactional
    public void deleteByName(String name) {
        XDCEntity xdcEntity = XDCEntity.find("name", name).firstResult();
        if(xdcEntity == null) throw new RuntimeException("Item not found");
        xdcEntity.delete();
    }

    public List<XDCEntity> getAll() {
        return XDCEntity.listAll();
    }

    @Transactional
    public void save(XDCEntity xdcEntity) {
        xdcEntity.persist();
        xdcEntity.getProperties().forEach(xdcPropertyEntity -> xdcPropertyEntity.persist());
    }

    @Transactional
    public void update(String name, XDCEntity updatedXdcEntity) {
        XDCEntity xdcEntity = XDCEntity.find("name", name).firstResult();
        if(xdcEntity == null) throw new RuntimeException("Item not found");
        xdcEntity.setDescription(updatedXdcEntity.getDescription());
        xdcEntity.setName(updatedXdcEntity.getName());
        xdcEntity.setImageUri(updatedXdcEntity.getImageUri());
        xdcEntity.getProperties().forEach(PanacheEntityBase::delete);
        xdcEntity.setProperties(updatedXdcEntity.getProperties());
        save(xdcEntity);
    }
}
