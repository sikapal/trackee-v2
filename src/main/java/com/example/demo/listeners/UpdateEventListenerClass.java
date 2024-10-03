package com.example.demo.listeners;

import org.hibernate.event.spi.PostUpdateEvent;
import org.hibernate.event.spi.PostUpdateEventListener;
import org.hibernate.persister.entity.EntityPersister;
import org.springframework.stereotype.Component;

@Component
public class UpdateEventListenerClass implements PostUpdateEventListener {
  @Override
  public void onPostUpdate(PostUpdateEvent postUpdateEvent) {
    //Subscriber to the update events on your entities.
    System.out.println(postUpdateEvent.getOldState());
  }

@Override
public boolean requiresPostCommitHandling(EntityPersister persister) {
    // Does this listener require that after transaction hooks be registered?
    // Typically this is true for post-insert event listeners,
    // but may not be, for example,
    // in JPA cases where there are no callbacks defined for the particular entity.
    return true;
}
}
