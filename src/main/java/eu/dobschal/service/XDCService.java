package eu.dobschal.service;

import eu.dobschal.entity.XDCEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class XDCService {

    public List<XDCEntity> getAll() {
        return XDCEntity.listAll();
    }

}
