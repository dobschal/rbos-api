package eu.dobschal.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "xdc")
public class XDCEntity extends PanacheEntity {
    String name;
    String description;
    String imageUri;

    @OneToMany
    List<XDCPropertyEntity> properties;
}
